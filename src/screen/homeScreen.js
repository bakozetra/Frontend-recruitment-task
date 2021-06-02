import React, { useCallback, useContext, useState } from "react"
import Header from "../components/header";
import { Input } from "../components/Input";
import { JokeRandomly } from "../components/JokeRandomly";
import Categories from "../components/selection";
import Button from "../components/button";
import Minus from "../images/minus.svg"
import Plus from "../images/plus.svg"
import styled from "styled-components";
import { ContextValue } from "../hooks/context";
import { getRamdomJoke } from "../data/data";
import ChuckNorrisImage from "../images/chuck-norris-photo.png"
import UserImage from '../images/user-photo.png'

const Form = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  width: 80%;
  max-width : 439px;
  height: 900px;
  margin : auto;
}
`
const Count = styled.div`
  display : flex ;
  width : 146px ;
  justify-content : space-around;
  background-color:#f5f6f8;
  border-radius : 8px
`
const Wrapper = styled.div`
 display : flex ;
 justify-content : space-between ;
`


const HomeScreen = () => {
    const { randomJoke, setRandomJoke } = useContext(ContextValue)
    const [count, setCount] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState('');
    const [personalJoke, setPesronalJoke] = useState('')

    const nextJokeCallBack = useCallback(async () => {
        const [firstName, lastName] = personalJoke.split(' ')
        let joke = null
        if (selectedCategory === "nerdy") {
            joke = await getRamdomJoke("nerdy", firstName, lastName)
        } else if (selectedCategory === "explicit") {
            joke = await getRamdomJoke("explicit", firstName, lastName)
        } else {
            joke = await getRamdomJoke('', firstName, lastName)
        }
        if (joke) {
            setRandomJoke(joke)
        }
    }, [selectedCategory, randomJoke, personalJoke])

    const saveJoke = (e) => {
        e.preventDefault()
        console.log(e.target.name);
    }

    return (
        <Container>
            <Header src={personalJoke === "" ? ChuckNorrisImage : UserImage} />
            <JokeRandomly joke={randomJoke?.value?.joke} />
            <Form>
                <Categories onChange={(e) => setSelectedCategory(e.target.value)} />
                <Input placeholder="Impersonate Chuck Norris" value={personalJoke} onChange={(e) => setPesronalJoke(e.target.value)} />
            </Form>
            <div>
                <Button
                    name={personalJoke === '' ? 'Draw a random Chuck Norris Joke' : `Draw a random ${personalJoke} Joke`}
                    onClick={nextJokeCallBack}
                    style={
                        {
                            color: "white",
                            width: "100%",
                            maxWidth: "439px",
                            height: "58px",
                            margin: "32px 0 16px",
                            border: "solid 1px gray",
                            borderRadius: "10px",
                            backgroundColor: "#34394f",
                        }
                    }
                />
            </div>
            <Wrapper>
                <Count>
                    <Button svg={Minus} style={{ backgroundColor: "#f5f6f8", border: "none" }} onClick={() => setCount(count - 1)} alt='icone - minus' />
                    <p>{count}</p>
                    <Button svg={Plus} style={{ backgroundColor: "#f5f6f8", border: "none" }} onClick={() => setCount(count + 1)} alt="icone-plus" />
                </Count>
                <form>
                    <Button
                        name="Save Jokes"
                        onSubmit={(e) => saveJoke(e.target.name)}
                        style={{
                            width: "285px",
                            borderRadius: "8px",
                            border: "none"
                        }} />
                </form>
            </Wrapper>
        </Container>
    )
}

export default HomeScreen
