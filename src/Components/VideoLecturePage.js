import React,{Component}from 'react';
import VideoLecture from '../Components/Utilities/VideoLecture';
import LessonCard from './Utilities/LessonCard'
import styles from '../CompStyles/lessonPage.module.css';
import video from "../mov_bbb.mp4";
import { render } from '@testing-library/react';
import axios from '../Components/axiosInstance'
class VideoLecturePage extends Component{ //that will give u an object kindof thing...using that, u can fetch any api..just paste the url like below4444444444466666444444444444444444
    state=
    {
        title:"Fetching Name...",
        url:"Fetching video url..."
    }
    componentDidMount()
        //done
    {
        axios.get('u/').then(
            response=>{
                console.log(response);
                var data=response.data;

                this.setState(
                    {
                        title:data[0]["title"],
                        url:data[0]["link"]
                    }
                )
            }
        ).catch(error=>{console.log(error)});
    }
    render()
    {
        return (    
            <div>
                <div>
                    {/* <VideoLecture url={video} chapName="Mathematics" desc="Mathematics lecture by pubg master Gamerdidi" /> */}
                    <VideoLecture url={this.state.url}  chapName={this.state.title} desc="Mathematics lecture by pubg master Gamerdidi" />
                </div>
                <div>
                    <h2 style={{margin: "20px 0 0 105px", color: "red"}}>Progress Bar</h2>
                    <div className={styles.lessonCards}>
                        <LessonCard title="video" percentage="44" background="125deg, #2375D3 0%, #3BA9FE 100%" />
                        <LessonCard title="pdf" percentage="60" background="125deg, #A36CFC 0%, #DAACE0 100%" />
                        <LessonCard title="excel" percentage="26" background="125deg, #F791AB 0%, #FCE484 100%" />
                        <LessonCard title="assignment" percentage="40" background="125deg, #FF6200 0%, #FD9346 100%" />
                    </div>
                </div>
            </div>
        );
    }
    
}

export default VideoLecturePage
