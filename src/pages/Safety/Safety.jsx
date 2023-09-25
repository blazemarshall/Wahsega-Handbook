import { Outlet } from "react-router"
import Page from "../../components/common/pageComponents/layout/Page"
import SubPageNav from "../../components/common/pageComponents/layout/SubPageNav"

const Safety = () => {
  const pageArray = ['Safety policies',
  // 'Responsibilities',
  'Protocols']
  return (
    <Page>
      <SubPageNav 
        pagesToLinksArray={pageArray}
        routeName={'safety'}        
        />
        <Outlet />
    </Page>
  )
}

export default Safety