import {  Container, Toolbar,  } from "@mui/material"
import Diversity from "./Components/Diversity"
import Ethics from "./Components/Ethics"
import Page from "../../components/common/pageComponents/layout/Page"

const Culture = () => {
  return (
    <Page customCssProperties={{backgroundColor:'orange'}}>

    <Diversity />
    <Ethics />
      </Page>
  )
}

export default Culture