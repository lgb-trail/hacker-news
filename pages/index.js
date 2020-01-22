import 'isomorphic-fetch';
import Layout from './layout'
import Header from './header'
import NextOffline from './nextoffline';
export default class extends React.Component {

    static async getInitialProps() {

        const storyReq = await fetch(`https://api.hackerwebapp.com/news`);
        const userReq = await fetch(`https://api.github.com/users`);

        const stories = await storyReq.json();
        const users = await userReq.json();
        return { stories, users }
    }

    render() {
        return <Layout title="Latest News">
            <Header />
            <NextOffline />
            {this.props.stories.map((story, index) => (
                <section className="story-card" key={index}>
                    <h2><a className="title-link" target="_blank" href={story.url}>{story.title.length < 45 ? story.title : story.title.substring(0, 45)}...</a></h2>
                    <a target="_blank" href={`https://avatars1.githubusercontent.com/u/${index}?v=4`}>
                        <img className="story-image" src={`https://avatars1.githubusercontent.com/u/${index}?v=4`} alt={story.user}/>
                    </a>
                    <div className="posted-by"> posted by <span>{story.user ? story.user : 'anonymous'} | <a className="domain-link" target="_blank" href={`http://${story.domain}`}>{story.domain}</a>
                    </span></div>
                    <p>{story.time_ago}</p>
                </section>
            ))}

<style global jsx> {`
h2 {
    font-weight: 400;
    color: #333;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px;
}

 .title-link {
    color:#fff;
}

.domain-link {
    color:#fff;
}

.posted-by {
    font-weight: 300;
    color: #888;
    padding: 15px 0;
}

p {
    font-weight: 300;
    color: #999;
}

.story-card {
    padding: 15px;
    border: 1px solid #000;
    margin: 15px;
    border-radius: 15px;
    display: inline-block;
    width: 100%;
    max-width: 400px;
    background-color: #000;
}

.story-image {
    display: block;
    width:100%;
    height: auto;
    max-height: 350px;
    border-radius: 10px:
}

body {
    background: #fff;
    font-family: system-ui;
    margin: 0;
}

`}</style>
        </Layout>
    }
}