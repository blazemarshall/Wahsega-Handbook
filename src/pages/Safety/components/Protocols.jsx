import ArticleBlock from "../../../components/common/pageComponents/layout/ArticleBlock"
import SubPage from "../../../components/common/pageComponents/layout/SubPage"
import BlockTitle from "../../../components/common/pageComponents/typography/BlockTitle"
import BulletPoint from "../../../components/common/pageComponents/typography/BulletPoint"
import PageTitle from "../../../components/common/pageComponents/typography/PageTitle"
import ParagraphBlock from "../../../components/common/pageComponents/typography/ParagraphBlock"
import HouseKeeping from "./protocols/HouseKeeping"
import Ladders from "./protocols/Ladders"
import Lifting from "./protocols/Lifting"
import MaterialHandling from "./protocols/MaterialHandling"
import MedicalAttention from "./protocols/MedicalAttention"
import PowerTools from "./protocols/PowerTools"
import SharpObjects from "./protocols/SharpObjects"
import Soldering from "./protocols/Soldering"

const Protocols = () => {
  return (
    <SubPage>
      <PageTitle>Protocols</PageTitle>
      <Soldering />
      <PowerTools />
      <SharpObjects />
      <MaterialHandling />
      <Ladders />
      <HouseKeeping />
      <MedicalAttention />
      <Lifting />
    </SubPage>
  )
}

export default Protocols