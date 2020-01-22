export default class extends React.Component {
    render() {
        return <div>
        <header >
                <img className="logo" src="https://avatars0.githubusercontent.com/u/6485454?s=400&v=4" alt="Logo"/>
                <div className="logo-text">NextJS PWA POC</div>
            </header>
<style global jsx> {`

header {
    min-height: 100px;
    background-color: #fff;
    border-bottom: 5px solid #FF4F00;
}

.logo {
    height: 100px;
    width: auto;
    display: inline;
    margin-top: 20px;
    
}

.logo-text {
    display: inline-block;
    padding: 10px;
    font-size: 26px;
    font-weight: 400;
    margin-top: 50px;
    position: absolute;
}

`}</style>
        </div>
    }
}