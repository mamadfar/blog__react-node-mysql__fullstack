import "./SinglePost.scss";
import Edit from "../../assets/img/edit.png";
import Delete from "../../assets/img/delete.png";
import {Link} from "react-router-dom";
import Menu from "./components/Menu";

const SinglePost = () => {
    return (
        <div className="single-post">
            <div className="single-post__content">
                <img
                    src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""/>
                <div className="single-post__content__user">
                    <img
                        src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""/>
                    <div className="single-post__content__user-info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="single-post__content__user-edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="edit"/>
                        </Link>
                        <img src={Delete} alt="delete"/>
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum explicabo harum impedit
                    necessitatibus, qui! Alias assumenda beatae cupiditate deserunt earum eius est eveniet excepturi
                    facere id ipsa iste laboriosam molestiae nesciunt nobis perspiciatis porro, possimus quia reiciendis
                    <br/><br/>
                    reprehenderit rerum saepe tempora vel, veniam voluptas. Ab adipisci architecto, aspernatur
                    consectetur dolorem ducimus explicabo facilis id laboriosam minus nam nihil nostrum quae qui
                    quibusdam quidem quisquam sunt suscipit ullam voluptas? Asperiores at commodi, corporis deserunt
                    <br/><br/>
                    doloremque eius ex fugiat in iusto molestiae nesciunt quaerat qui quis, tenetur voluptatem!
                    Architecto aut blanditiis, deserunt ducimus eos expedita fuga id incidunt ipsam ipsum iure labore,
                    officia quidem quisquam sapiente tempora temporibus totam, ut voluptas voluptates. Consequuntur
                    dignissimos error saepe. Ab, dignissimos doloremque earum enim esse nulla odit qui ratione sed
                    veniam? Consequuntur eius facere itaque maxime ullam! Aliquam dolore quam sunt? Accusamus adipisci
                    atque beatae dolores eius facilis illum laboriosam laudantium molestiae omnis, porro, praesentium
                    quaerat saepe, totam voluptas. Asperiores, aspernatur blanditiis commodi consequatur culpa doloribus
                    eius laudantium non nostrum nulla perferendis quidem quisquam sint unde voluptates. Ea excepturi
                    quasi quis sed voluptatibus. Architecto at eligendi, inventore laboriosam numquam odit? Blanditiis
                    cumque earum enim eveniet expedita in neque obcaecati odit, omnis repudiandae suscipit, unde ut
                    <br/><br/>
                    voluptatibus? Accusantium adipisci autem cum dolore est expedita id nihil officia quas soluta? Eum
                    molestias odit ullam? Ipsam labore quia quidem sequi! Animi, blanditiis, consequatur corporis
                    doloremque esse eveniet ex fugiat fugit nesciunt non nostrum odio odit optio possimus quod quos
                    reiciendis, rem saepe sed voluptatibus. Deleniti, eos excepturi mollitia perferendis quas recusandae
                    repudiandae! A alias asperiores culpa cum delectus, dicta dolorum error est expedita harum in
                    incidunt, iste quas repudiandae rerum totam vitae voluptates. Commodi, dolor itaque magnam molestias
                    omnis provident qui repellendus. Ab aspernatur consequatur debitis, dignissimos dolor eum, explicabo
                    incidunt labore minus numquam odit possimus quas, sapiente sunt unde voluptates voluptatum! Aliquid
                    error facere magni molestias obcaecati repellat vero. Aspernatur cum distinctio doloremque est
                    eveniet ex excepturi explicabo fuga fugit harum id illo inventore, ipsa laborum laudantium magnam
                    <br/><br/>
                    recusandae reprehenderit, voluptates. Ab amet architecto asperiores culpa, dolor dolore et ipsum
                    itaque iure maiores nisi perferendis quaerat saepe tempora voluptatem. Aliquam deleniti distinctio
                    illo neque placeat? Ab assumenda corporis ducimus excepturi id minima quisquam soluta veritatis? Ab
                    aliquam, atque aut cumque, debitis ea eaque eum eveniet exercitationem explicabo harum in inventore
                    magnam nihil nulla numquam officiis provident quae quibusdam quod sequi sit sunt vitae voluptas,
                    voluptate. Expedita magni placeat quod ut? Accusantium, at doloribus incidunt mollitia officia
                    quaerat sequi velit vero. Asperiores autem dolorem dolorum fuga hic illo ipsa iste libero, mollitia,
                    quae, quia quod repellendus tempora. Ab asperiores at dicta doloribus error, est, expedita fugit id
                    impedit laudantium magnam necessitatibus nulla, pariatur praesentium quas quisquam quo rerum unde
                    vel voluptatem. Amet culpa, deleniti dignissimos dolores est in iure nam nihil nisi, obcaecati
                    perferendis placeat quo quod rerum saepe sed sit voluptatem. Ab amet beatae error eum fugiat
                    incidunt inventore iusto, necessitatibus officia pariatur possimus quas quasi qui quibusdam
                    reiciendis repellendus velit. Ab autem consequatur cum dolorem dolorum ducimus est facilis fugiat
                </p>
            </div>
            <Menu/>
        </div>
    )
}

export default SinglePost
