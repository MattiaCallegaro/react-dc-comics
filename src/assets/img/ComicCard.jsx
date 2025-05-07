

const ComicCard = (props) => {
    return (
        <div className="prod-card">
            <img src={props.image} />
            <h4>{props.title}</h4>
        </div>
    );
};

export default ComicCard