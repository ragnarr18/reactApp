import React from 'react';
// import Keys from '../keys.json';
import axios from 'axios';
// import request from 'request'

//reason why this fales I think https://riot-api-libraries.readthedocs.io/en/latest/mobile.html
export default class Stats extends React.Component{
    constructor(){
        super();
        this.state = {currentPage: "Blessaður"}
    }

    componentDidMount() {
        // GET request using fetch with set headers
        // console.log(Keys.leagueToken)
        // console.log('https://eun1.api.riotgames.com/tft/summoner/v1/summoners/by-name/'.concat('ih8myx'))
        // axios.get("https://eun1.api.riotgames.com/tft/summoner/v1/summoners/by-name/ih8myx", {headers:{
        //     "X-Riot-Token": Keys.leagueToken.toString(),
        //     'Access-Control-Allow-Origin': "*"
        // }})
        var my = this.getDataAxios();
        
    }

    async getDataAxios(){
        // const response =
        //   await axios.get("https://eun1.api.riotgames.com/tft/summoner/v1/summoners/by-name/ih8myx",
        //     { headers: {'X-Riot-Token': 'RGAPI-b23b52c4-1796-4109-bf67-a81fa84c522f',
        //     'Access-Control-Allow-Origin' : 'http://192.168.1.157:3000'}}
        //   )
        // console.log(response.data)
        fetch('https://eun1.api.riotgames.com/tft/summoner/v1/summoners/by-name/ih8myx', {
            method: 'GET', // or 'PUT'
            headers: {
                'X-Riot-Token': 'RGAPI-067e9430-5a24-402b-aa4b-f112bde59c5a',
            }
            })
            .then((response) => response.json())
            .then((data) => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }
    
    render(){
        return(
            <div>
               
               
            </div>
        )
    }

}