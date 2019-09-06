import React, {Component} from 'react';

import {connect} from 'react-redux';
import {fetchPostsAndUser} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostsAndUser();
    }

    renderPosts = () => {
        return this.props.post_list.map((post) => {
            return <div className="item" key={post.id}>
                <i className="large middle aligned icon user"/>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            </div>
        });
    };

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderPosts()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {post_list: state.posts};
};

export default connect(mapStateToProps, {fetchPostsAndUser})(PostList);