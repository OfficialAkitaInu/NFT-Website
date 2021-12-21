import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="nftBackground text-white pb-sm-5">
                <svg className="m-minus-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(46,49,54)" d="M0,128L15,128C30,128,60,128,90,128C120,128,150,128,180,112C210,96,240,64,270,64C300,64,330,96,360,106.7C390,117,420,107,450,122.7C480,139,510,181,540,202.7C570,224,600,224,630,186.7C660,149,690,75,720,64C750,53,780,107,810,154.7C840,203,870,245,900,261.3C930,277,960,267,990,234.7C1020,203,1050,149,1080,149.3C1110,149,1140,203,1170,186.7C1200,171,1230,85,1260,80C1290,75,1320,149,1350,181.3C1380,213,1410,203,1425,197.3L1440,192L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path></svg>
                <div className="container small-width text-white mt-5 pb-5">
                    <div className="px-4">
                        <div className="text-center">
                            <a href="https://reddit.com/r/AkitaInuASA/" className="my-3 btn btn-light btn-lg rounded-pill btn-lg px-4 mx-2"><i className="fab fa-reddit-alien"></i> Reddit</a>
                            <a href="https://twitter.com/AkitaInuASA" className="my-3 btn btn-light btn-lg rounded-pill btn-lg px-4 mx-2"><i className="fab fa-twitter"></i> Twitter</a>
                            <a href="https://discord.gg/SmMuHws8nT" className="my-3 btn btn-light btn-lg rounded-pill btn-lg px-4 mx-2"><i className="fab fa-discord"></i> Discord</a>
                            <a href="https://www.instagram.com/akitainuasa_official/" className="my-3 btn btn-light btn-lg rounded-pill btn-lg px-4 mx-2"><i className="fab fa-instagram"></i> Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-dark-grey">
                <div className="container text-center">
                    <p className="pt-3 mb-0">&copy; 2021 Akita Inu ASA</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
