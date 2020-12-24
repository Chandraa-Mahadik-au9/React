import React, { Component } from 'react';



export class TheImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // date: '2020-12-23',
            date: this.props.imageData.date,
            imageUrl: this.props.imageData.mainUrl,
            imageData: ''
        }
    }

    componentDidMount = () => {
        const url = this.state.imageUrl;
        // const url = this.state.imageUrl;
        fetch(url, {method: 'GET'})
        .then(response => {
            return response.json();
        })
        .then(data => {
            
            this.setState({
                imageData: data 
            })
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("state updated");
        console.log(prevState.date);
        console.log(this.state.date);
        console.log(this.props.imageData.date);
        if (this.props.imageData.date !== this.state.date) {
            console.log("Here..")
            // console.log(this.state.imageUrl)
            this.setState({
                date: this.props.imageData.date,
            })
        }
    }

    render() {
        let imageUrl = this.state.imageData.url;
        let imageInfo = this.state.imageData.explanation;
        return (
            <div>
                <h2>Today's NASA Image</h2>
                <img src={imageUrl} alt="daily nasa pic" />
                <p>{imageInfo}</p>
            </div>
        )
    }
}

export default TheImage;