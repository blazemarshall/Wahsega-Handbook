import ArticleBlock from "../../../components/common/pageComponents/layout/ArticleBlock"
import SubPage from "../../../components/common/pageComponents/layout/SubPage"
import BlockTitle from "../../../components/common/pageComponents/typography/BlockTitle"
import PageTitle from "../../../components/common/pageComponents/typography/PageTitle"
import ParagraphBlock from "../../../components/common/pageComponents/typography/ParagraphBlock"

export const FourZeroOneK = () => {
  return (
    <SubPage>
      <PageTitle>401k</PageTitle>
      <ArticleBlock>
        <BlockTitle>401k Plan</BlockTitle>
          <ParagraphBlock>The company offers a voluntary 401k plan in which
            regular full-time and regular part-time employees,
            who are 21 years of age or older, may elect to
            participate beginning after a time period
            established by management based on terms of
            employment. Wahsega does not currently match
            employee contribution at this time.</ParagraphBlock>
        </ArticleBlock>

    </SubPage>
    
  )
}

export default FourZeroOneK