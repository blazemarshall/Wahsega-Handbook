import {  Container, Toolbar,  } from "@mui/material"
import Ethics from "./Components/Ethics"
import Page from "../../components/common/pageComponents/layout/Page"
import SubPageNav from "../../components/common/pageComponents/layout/SubPageNav"
import { Outlet } from "react-router"

const Culture = () => {
  const pageArray = ['doSomethin',]
  return (
    <Page customCssProperties={{
      // backgroundColor:'orange'
      }}>
        <SubPageNav 
          routeName={'culture'}
          pagesToLinksArray={pageArray}
          />
        <Outlet />
    </Page>
  )
}

export default Culture