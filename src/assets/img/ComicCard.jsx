

const ComicCard = (props) => {
    return (
        <div className="prod-card">
            <img src={props.src} />
            <h4>{props.title}</h4>
        </div>
    );
};

export default ComicCard