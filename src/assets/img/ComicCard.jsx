

const ComicCard = (props) => {
    return (
        <div className="prod-card">
            <img src={props.comic.thumb} />
            <h4>{props.comic.title}</h4>
        </div>
    );
};

export default ComicCard