import React from "react"
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/cssReset";
import Menu from "../src/components/Menu/index";
import { StyledTimeline } from "../src/components/timeline";

function Homepage() {
    const estilodaHomepage = {
        // backgroundColor: "red" 
    }

    const [valorDoFiltro, setValorDoFiltro] = React.useState("")
    return (
        <>
            <CSSReset />

            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                //backgroundColor:"red",
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} >
                    conteudo
                </Timeline>
            </div >
        </>
    )
}
export default Homepage

// function Menu() {
//     return (
//         <div>
//             menu
//         </div>
//     )
// }
const StyledHeader = styled.div`
            img{
                width:80px;
            height:80px;
            border-radius: 50%;
    }
            .user-info{
                display: flex;
            align-items: center;
            width: 100%;
            padding: 16px 32px;
            gap: 16px;
    }
`

const StyledBanner = styled.div`
background-image: blue;
height: 230px;
/* background-image: url(""); */
`
function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}
function Timeline({ searchValue, ...props }) {
    // console.log("dentro do componente", props)
    const playlistNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                console.log(playlistName)
                console.log(videos)
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={videeo.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}