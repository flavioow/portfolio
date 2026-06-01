import gsap from "gsap"

type HorizontalLoopConfig = {
  repeat?: number
  paused?: boolean
  speed?: number
  reversed?: boolean
  paddingRight?: number
  snap?: number | false
}

export function horizontalLoop(
  items: HTMLElement[],
  config: HorizontalLoopConfig = {},
) {
  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: {
      ease: "none",
    },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100)
    },
  })

  const length = items.length
  const startX = items[0].offsetLeft

  const times: number[] = []
  const widths: number[] = []
  const xPercents: number[] = []

  let curIndex = 0

  const pixelsPerSecond = (config.speed || 1) * 100

  const snap =
    config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1)

  gsap.set(items, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(
        gsap.getProperty(el, "width", "px") as string,
      ))

      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          Number(gsap.getProperty(el, "xPercent")),
      )

      return xPercents[i]
    },
  })

  gsap.set(items, { x: 0 })

  const totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      Number(gsap.getProperty(items[length - 1], "scaleX")) +
    (config.paddingRight || 0)

  for (let i = 0; i < length; i++) {
    const item = items[i]

    const curX = (xPercents[i] / 100) * widths[i]

    const distanceToStart = item.offsetLeft + curX - startX

    const distanceToLoop =
      distanceToStart + widths[i] * Number(gsap.getProperty(item, "scaleX"))

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0,
    )

    tl.fromTo(
      item,
      {
        xPercent: snap(
          ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
        ),
      },
      {
        xPercent: xPercents[i],
        duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
        immediateRender: false,
      },
      distanceToLoop / pixelsPerSecond,
    )

    tl.add(`label${i}`, distanceToStart / pixelsPerSecond)

    times[i] = distanceToStart / pixelsPerSecond
  }

  function toIndex(index: number, vars = {}) {
    if (Math.abs(index - curIndex) > length / 2) {
      index += index > curIndex ? -length : length
    }

    const newIndex = gsap.utils.wrap(0, length, index)

    let time = times[newIndex]

    if (time > tl.time() !== index > curIndex) {
      // @ts-expect-error
      vars.modifiers = {
        time: gsap.utils.wrap(0, tl.duration()),
      }

      time += tl.duration() * (index > curIndex ? 1 : -1)
    }

    curIndex = newIndex

    return tl.tweenTo(time, {
      ...vars,
      overwrite: true,
    })
  }

  // @ts-expect-error
  tl.next = (vars) => toIndex(curIndex + 1, vars)

  // @ts-expect-error
  tl.previous = (vars) => toIndex(curIndex - 1, vars)

  tl.current = () => curIndex

  // @ts-expect-error
  tl.toIndex = (index, vars) => toIndex(index, vars)

  tl.times = times

  tl.progress(1, true).progress(0, true)

  if (config.reversed) {
    tl.vars.onReverseComplete?.()
    tl.reverse()
  }

  return tl
}
