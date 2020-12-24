import React, { Component } from 'react';
import Date from './Date.js';
import TheImage from './TheImage.js';


const nasaUrl = "https://api.nasa.gov/planetary/apod";
const apiKey = "ri0EZkle2DPanZWtyS8oZFgC4coub86CDtV5OiYV";
export class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '2020-12-23',
            mainUrl:`${nasaUrl}?api_key=${apiKey}`
        }
    }

    getDate = (inputDate) => {
        console.log(inputDate);
        this.setState({
            date: inputDate,
            mainUrl: `${nasaUrl}?api_key=${apiKey}&date=${inputDate}`
        })

        console.log(this.state.date);
        console.log(this.state.mainUrl);

    }


    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>NASA Image Gallery</h1>
                <Date getInputDate={this.getDate} />
                <TheImage imageData={this.state} />
            </div>
        )
    }
}

export default Gallery;