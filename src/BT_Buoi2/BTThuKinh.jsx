import React, { Component } from 'react'
import "./BTThuKinh.css";

export default class BTThuKinh extends Component {
    ListGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glasesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        imgGlass: "./glasesImage/v1.png"
    }

    BF_AT = (status) => {
          status ? document.getElementById("glass_avatar").style.display = "none" : document.getElementById("glass_avatar").style.display = "block"
    }
    changeGlass = (id) => {
        this.setState({
            imgGlass:`./glasesImage/v${id}.png`
        })
    }

    renderGlass = () => {
        return this.ListGlass.map((glass, i) => {
            return <div className='col-4' key={glass.id}>
                <img onClick={()=> {
                    this.changeGlass(glass.id)
                }} src={`./glasesImage/g${i + 1}.jpg`} alt="" />
            </div>
        })

    }
    render() {
        return (
            <div className="container vglasses py-3">
                <div className="row  justify-content-between">
                    <div className="col-6 vglasses__left">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mb-2">Virtual Glasses</h1>
                            </div>
                        </div>
                        <div className="row" id="vglassesList">
                            {this.renderGlass()}
                        </div>
                    </div>
                    
                    <div className="col-5 vglasses__right p-0">
                        <div className="vglasses__card">
                            <div className="mb-2 text-right mt-2 mr-2">
                                <button className="btn btn-warning mr-2" onClick={() =>{
                                    {this.BF_AT(true)}

                                }}>Before</button>
                                <button className="btn btn-warning" onClick={() =>{
                                    { this.BF_AT(false) }

                                }}>After</button>
                            </div>
                            <div className="vglasses__model" id="avatar">
                                <img id='glass_avatar' src={this.state.imgGlass} alt="" />
                            </div>
                        </div>
                       
                        <div id="glassesInfo" className="vglasses__info">

                        </div>
                    </div>
                </div>
            </div>
            

        )
    }
}
