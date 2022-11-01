import './singlePost.css';

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePost__wrapper">
            <img className="singlePost__img" src="https://picsum.photos/1100/900" alt="" />
            <h1 className="singlePost__title">Lorem ipsum dolor sit amet
                <div className="singlePost__edit">
                    <i className="singlePost__icon fa-regular fa-pen-to-square"></i>
                    <i className="singlePost__icon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePost__info">
                <span className="singlePost__author">Author: <b>Nari</b></span>
                <span className="singlePost__date">1 hour ago</span>
            </div>
            <p className="singlePost__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi explicabo reiciendis sunt aspernatur est obcaecati omnis, expedita recusandae dicta debitis quos. Eum provident hic expedita, reprehenderit numquam pariatur velit tempora, debitis totam repellendus officia voluptatum perferendis harum, ipsa sunt vitae deserunt neque a ab reiciendis aperiam iure labore ipsam iusto? Reprehenderit nihil earum laborum numquam, exercitationem ullam, adipisci deserunt blanditiis nisi error officiis quisquam at ea. Placeat veritatis eveniet perspiciatis debitis. Exercitationem facere dolore iusto. Accusamus odio veniam unde quasi vel placeat ullam, ratione, itaque praesentium iste est blanditiis repellendus accusantium beatae corporis alias quis vitae nobis quibusdam sed expedita maxime incidunt excepturi! Mollitia reiciendis odit nemo exercitationem impedit iste itaque deleniti, odio consequatur velit tenetur aspernatur ullam hic sequi iusto officia rem, voluptatibus pariatur quasi. Animi sed ipsum accusamus!
            </p>
        </div>
    </div>
  )
}
