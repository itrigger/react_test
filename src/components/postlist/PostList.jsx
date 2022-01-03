import PostItem from "../post/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PostService from "../../API/PostService";

const PostList = ({posts, remove}) => {
    if(!posts.length){
        return (
            <h3>Пусто</h3>
        )
    }

    return (
        <div>
            <TransitionGroup>
            {posts.map((item, index) =>
                <CSSTransition
                key={item.id}
                timeout={500}
                classNames="post"
                >
                    <PostItem remove={remove} number={index+1} post={item} />
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;