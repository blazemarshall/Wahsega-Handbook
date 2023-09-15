import { Outlet } from "react-router"
import Page from "../../components/common/pageComponents/layout/Page"
import SubPageNav from "../../components/common/pageComponents/layout/SubPageNav"

const Benefits = () => {
  const pageArray = ['Insurance','SAP Expense Reimbursement','401k Plan',]
  return (
    <Page>
      <SubPageNav pagesToLinksArray={pageArray} />
      <Outlet />
    </Page>
  )
}

export default Benefits