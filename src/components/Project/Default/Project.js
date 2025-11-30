import { useContext } from "react";
import Card from "../../Card/Card";
import { UserContext } from "../../../context/UserContext";
import SocialIcon from "../../SocialIcon/SocialIcon";

const Project = () => {
    const { userData } = useContext(UserContext);

    return (
        <div className="p-4">
            <h3 className="font-semibold mb-2">Projects</h3>
            <div className="lg:flex">
                {userData['projects'] ? userData['projects'].map((element, index) => {
                    let content = [(
                        <div>
                            <p className="text-secondary-text text-base">{element["content"]}</p>
                        </div>
                    )];
                    let footerTags = [];
                    if (element['demo']) {
                        footerTags.push(
                            <a href={element['demo']}>Live Site</a>
                        );
                    }
                    if (element['github']) {
                        footerTags.push(
                            <a href={element['github']}><SocialIcon social={'github'} />&nbsp;Github</a>
                        );
                    }
                    return (<div className="p-4 ml-[-0.5rem] lg:flex-1">
                        <Card title={element['title']} content={content} footerTags={footerTags} />
                    </div>
                    )
                }) : []}
            </div>
        </div>

    );
}

export default Project;