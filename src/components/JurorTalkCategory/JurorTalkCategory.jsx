import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import JurorTalkSubmission from '../JurorTalkSubmission/JurorTalkSubmission'

import './JurorTalkCategory.css';

class JurorTalkCategory extends Component {

    componentDidMount() {
        this.getSubmission();
    }

    getSubmission = () => {
        console.log('Fetching submissions');

        this.props.dispatch({
            type: 'FETCH_SUBMISSIONS'
        });
    }

    toggleDisplay = () => {
        console.log('toggleDisplay clicked!');
            let toggleStatus = document.getElementById(this.props.id);
            if (toggleStatus.style.display === "none") {
                toggleStatus.style.display = "block";
            } else {
                toggleStatus.style.display = "none";
            }
          
    }

    render() {
        console.log('this.props for JurorTalkCategory', this.props);
        let submissionsForThisCategory = this.props.store.submissions
            .filter(submission => submission.category_id === this.props.topicId)
        return(
            <div>
                <div className='topicHeader'>
                    <button className='toggleDisplay' onClick={this.toggleDisplay}>Toggle Display</button>
                    <h4>{this.props.title}</h4>
                </div>
                <div id={this.props.id}>
                {submissionsForThisCategory.map((submission) => {
                    return(
                    <JurorTalkSubmission 
                    key={submission.id}
                    talkId={this.props.topicId}
                    categoryId={submission.category_id}
                    name={submission.full_name}
                    email={submission.email}
                    instagram={submission.instagram}
                    linkedin={submission.linkedin}
                    twitter={submission.twitter}
                    comment={submission.comments}
                    video={submission.video_url}
                    />
                )})}
                </div>
                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(JurorTalkCategory);