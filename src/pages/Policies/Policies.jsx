import { Outlet } from "react-router"
import SubPageNav from "../../components/common/pageComponents/layout/SubPageNav"
import Page from "../../components/common/pageComponents/layout/Page"

const Policies = () => {
  const pageArray = ['Diversity','Harassment','Photo/Video']
  return (
    <Page>
      <SubPageNav 
        pagesToLinksArray={pageArray}
        routeName={'policies'}
        />
      <Outlet />
    </Page>
  )
}

export default Policies