import { useContext } from "react";
import Card from "../../Card/Card";
import { UserContext } from "../../../context/UserContext";
import SocialIcon from "../../SocialIcon/SocialIcon";

const Project = () => {
    const { userData } = useContext(UserContext);

    return (
        <div className="p-6">
            <h3 className="font-semibold mb-4 text-primary-text">Projects</h3>
            <div className="lg:flex gap-6">
                {userData['projects'] ? userData['projects'].map((element, index) => {
                    let content = [(
                        <div key={index}>
                            <p className="text-secondary-text text-sm leading-relaxed">{element["content"]}</p>
                        </div>
                    )];
                    let footerTags = [];
                    if (element['demo']) {
                        footerTags.push(
                            <a href={element['demo']} target="_blank" rel="noreferrer">Live Site</a>
                        );
                    }
                    if (element['github']) {
                        footerTags.push(
                            <a href={element['github']} target="_blank" rel="noreferrer"><SocialIcon social={'github'} containerClassName='inline' />&nbsp;Github</a>
                        );
                    }
                    return (<div key={index} className="lg:flex-1 mb-4 lg:mb-0">
                        <Card title={element['title']} content={content} footerTags={footerTags} />
                    </div>
                    )
                }) : []}
            </div>
        </div>
    );
}

export default Project;
