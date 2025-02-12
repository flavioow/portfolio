import Navbar from "@/components/Navbar"
import { Link } from "@/navigation"
import { getTranslations } from "next-intl/server"
import Image from "next/image"

export default async function Home() {
    const t = await getTranslations("#Homepage")

    return (
        <div>
            <Navbar />
            <header
                id="about"
                className="m-8 grid grid-cols-[250px_minmax(300px,850px)] gap-12 justify-center">
                <div className="relative w-[250px] h-[600px] z-10">
                    <Image
                        src="/assets/profile-low.png"
                        alt="Loading..."
                        fill
                        priority
                        className="object-cover blur-sm"
                    />
                    <Image
                        src="/assets/profile-high.png"
                        alt="Profile picture"
                        fill
                        loading="lazy"
                        className="object-cover transition-opacity duration-1000 ease-in-out"
                    />
                </div>

                <div className="grid justify-between h-full pt-32">
                    <div>
                        <h1>
                            Flávi.
                            <span className="font-calligraffitti">oow</span>
                        </h1>
                        <h2>{t("about.slogan")}</h2>
                        <p className="text-justify">{t("about.description")}</p>
                    </div>

                    <div className="flex gap-8 h-fit">
                        <Link
                            href="https://flavioow.vercel.app/assets/cv.pdf"
                            target="_blank"
                            className="px-12 py-4 border-b-4 border-text hover:no-underline">
                            <p>CV</p>
                        </Link>
                        <Link
                            href="https://github.com/flavioow"
                            target="_blank"
                            className="px-12 py-4 border-b-4 border-text hover:no-underline">
                            <p>GitHub</p>
                        </Link>
                    </div>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                ducimus a voluptatum quisquam accusamus vitae vel neque.
                Mollitia, odit! Ipsam magnam debitis deserunt exercitationem
                aspernatur ut dolor consequatur, accusantium unde? Cupiditate
                velit, laboriosam iure cum ex nobis officia, non doloremque
                minima voluptatibus optio? Nam officiis doloribus quisquam ex
                ipsam perferendis quas, quibusdam excepturi! Saepe animi
                voluptatibus culpa, amet repudiandae sapiente tempora adipisci
                atque voluptates itaque modi? Id dolore expedita unde
                exercitationem incidunt, enim laudantium qui nulla earum velit.
                Provident vitae iusto voluptatibus suscipit impedit corporis aut
                dolorem vel nesciunt, quisquam obcaecati ratione quibusdam eius
                doloremque rem temporibus natus, deleniti atque facilis,
                corrupti cumque illum dolores? Assumenda dolorem beatae
                inventore tempora corporis a illo voluptas. Rem totam optio non
                voluptatibus obcaecati aperiam temporibus sit distinctio autem
                praesentium. Eum excepturi nesciunt harum pariatur magni at amet
                in placeat rerum, ut perferendis quia possimus non. Quas totam
                voluptatum incidunt ullam debitis vel. Similique perferendis
                aliquam harum reiciendis possimus doloribus sed sequi excepturi
                eligendi accusantium, voluptatem vitae quia velit dolorum
                debitis delectus ab? Porro delectus sapiente illo quis
                distinctio eos iure, quisquam maxime? Odit non vel esse quas
                atque fugit doloribus sed accusamus obcaecati enim dolorem,
                natus in quo laudantium deleniti dolores quae nostrum modi a
                deserunt culpa eos expedita ullam? Aliquid repellendus obcaecati
                accusamus dolorem ipsa enim iure culpa. Perspiciatis maxime,
                similique odio eum quo repellat atque placeat. Id ratione,
                cumque eaque beatae laboriosam minus voluptatibus provident
                incidunt delectus aperiam cum. Earum unde ratione aperiam porro
                rerum dolorum id sequi quas voluptate corrupti.
            </p>

            <section id="skills">SKILLS</section>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quibusdam qui voluptates eveniet asperiores.
                Dignissimos temporibus odit libero sapiente voluptas adipisci
                voluptate amet expedita? Distinctio voluptatum quisquam,
                laboriosam similique cumque sed aperiam blanditiis, perferendis
                aut velit voluptates alias, reiciendis provident ab at fugit
                minima quo! Sunt consequuntur sed aliquid incidunt odit
                temporibus neque! Distinctio quia temporibus ratione, vitae
                asperiores necessitatibus sunt, modi explicabo suscipit
                molestiae ad nostrum ab quasi odio ex ea aspernatur incidunt.
                Minima quos est consequuntur, modi animi commodi voluptas
                expedita tempora omnis porro eveniet cupiditate necessitatibus?
                Inventore illum blanditiis incidunt quod alias quos esse
                officiis impedit voluptatum.
            </p>

            <section id="projects">PROJECTS</section>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                hic excepturi, maiores, laboriosam saepe doloremque eligendi
                sint consequatur provident asperiores aspernatur illum magni
                eum! Soluta nisi repellendus, animi iste dolores nulla excepturi
                aliquam perferendis, ratione, magni dolor porro similique
                quaerat. Sed ipsam explicabo doloribus aut ex expedita vitae
                laboriosam amet fugiat facilis, modi saepe repellat molestias at
                veniam accusamus nesciunt rem? Alias molestias nesciunt
                necessitatibus officia, ad illo minima sit. Est mollitia
                architecto maxime voluptas quod quidem maiores minima
                perspiciatis labore perferendis. Soluta id cumque, aspernatur
                iusto blanditiis impedit eligendi autem velit perspiciatis nam
                fugiat minus vero distinctio cum veniam eum officiis totam
                suscipit quia? Deleniti optio suscipit neque dignissimos dolor
                distinctio, ex, ducimus quo velit consequuntur maxime alias
                totam dicta! Repellendus pariatur sit maiores. Dolore iusto,
                modi ex, voluptatem enim quod ab rem id quisquam fuga ut
                doloribus animi. Aliquam placeat praesentium harum odio officia
                sapiente sint reiciendis voluptate possimus quibusdam eius cum
                autem ea, cumque officiis asperiores quasi. Reprehenderit
                officia, laudantium vel dolore obcaecati voluptatem
                necessitatibus eum doloribus deserunt impedit delectus sequi!
                Dicta nulla dolores corporis vero illo soluta, quas nisi
                voluptates eius tenetur pariatur molestiae beatae ad
                reprehenderit adipisci numquam magnam possimus expedita natus
                officiis illum accusantium ipsa, aliquid at! Asperiores
                molestiae amet veniam culpa in repudiandae nisi odio provident
                omnis? At mollitia deleniti dolorum sint minus hic excepturi est
                consequuntur quasi vel exercitationem earum nobis possimus
                voluptatibus, corporis amet ea dolore soluta. Est ratione
                nostrum, dolore, quia deleniti dignissimos numquam optio
                similique error quo libero ipsum aspernatur quisquam? A ipsa
                voluptatum, molestias ratione quos possimus doloribus veritatis?
                Deleniti accusamus quia sequi, culpa odio unde reprehenderit
                commodi amet consequuntur nihil rerum ut veniam aperiam
                voluptatem dolore architecto id adipisci totam itaque!
                Voluptatem culpa eius nam porro nemo aspernatur, ab laborum,
                accusamus, suscipit expedita possimus! Cupiditate officia autem
                fugiat optio magni quae veritatis maiores deleniti illum!
                Quisquam, similique incidunt. Architecto quia, natus, est
                molestiae pariatur iste ea optio modi deleniti sint, odio
                distinctio voluptatibus dolor porro enim deserunt amet maiores.
                Ex mollitia error necessitatibus id repellendus, dignissimos
                saepe eos laboriosam repellat nisi? Molestias doloribus quasi
                dignissimos. Voluptatum obcaecati amet velit, repellat rem quia
                beatae doloribus hic nobis sed rerum magni recusandae quasi
                veniam placeat illo reiciendis quam! Eaque voluptate hic magni
                recusandae quod autem dicta vero voluptatem id, dolor
                repellendus distinctio odio necessitatibus totam ratione nam quo
                fuga amet. Eos saepe ad inventore ea numquam quam expedita
                nulla?
            </p>

            <section id="contact">Contact</section>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium sit voluptates itaque in blanditiis officiis facere
                quas eligendi, reprehenderit corrupti dolor pariatur tempora sed
                vel molestias amet ab maxime qui temporibus sapiente eum. Omnis
                odit tempore ducimus odio, nostrum quibusdam!
            </p>
        </div>
    )
}
