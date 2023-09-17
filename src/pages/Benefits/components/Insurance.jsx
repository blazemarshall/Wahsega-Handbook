import { Box } from "@mui/material"
import SubPage from "../../../components/common/pageComponents/layout/SubPage"
import BlockTitle from "../../../components/common/pageComponents/typography/BlockTitle"
import PageTitle from "../../../components/common/pageComponents/typography/PageTitle"
import ParagraphBlock from "../../../components/common/pageComponents/typography/ParagraphBlock"
import ContentBlock from "../../../components/common/pageComponents/layout/ContentBlock"
import ArticleBlock from "../../../components/common/pageComponents/layout/ArticleBlock"
import BulletPoint from "../../../components/common/pageComponents/typography/BulletPoint"

const Insurance = () => {
  return (
    <SubPage sx={{
      padding:'500px'
    }}>
     <PageTitle>Insurance</PageTitle> 
        <ArticleBlock>

      <BlockTitle>Health/Dental/Vision Insurance</BlockTitle>

      <ParagraphBlock>The company currently offers regular full-time employees regularly scheduled to work a minimum of 35 hours per week
          enrollment in medical and dental insurance coverage options after they have been employed for 30 days.
      </ParagraphBlock> 

      <ParagraphBlock>Employees have up to 30 days from their date of hire to make medical and dental plan elections. Once made, elections are fixed
          for the remainder of the plan year. Changes in family status, as defined in the Plan document, allow employees to make midyear
          changes in coverage consistent with the family status change. Please contact the Human Resource department to determine if a
          family status change qualifies under the Plan document and IRS regulations.
      </ParagraphBlock>

      <ParagraphBlock>At the end of each calendar year during open enrollment, employees may change medical and dental elections for the following
          calendar year. The Human Resource department is available to answer benefits plan questions and assist in enrollment as
          needed.
      </ParagraphBlock>
        </ArticleBlock>
        <ArticleBlock>

          <BlockTitle>Basic Life and Accidental Death & Dismemberment Insurance</BlockTitle>
          <ParagraphBlock>Wahsega provides Basic Life and AD&D insurance in the amount of $25,000 through Sun Life Financial. Employees are
automatically enrolled in this employer funded benefit.</ParagraphBlock>
        </ArticleBlock>
        <ArticleBlock>
          <BlockTitle>Voluntary Life and AD&D Insurance</BlockTitle>
          <ParagraphBlock>Employees who want to supplement their basic life
benefit may purchase additional coverage in the
amount of:</ParagraphBlock>
            <Box>
              <BulletPoint>Employee: Increments of $10,000 up to $300,000. (not to exceed 5x annual earning)</BulletPoint>
              <BulletPoint>Spouse: Increments of $5,000 up to $100,000 (to a
maximum of 50% of employee’s coverage)</BulletPoint>
              <BulletPoint>Child(ren): Increments on $2,500 up to $10,000</BulletPoint>
            </Box>
        </ArticleBlock>
 

    </SubPage>
  )
}

export default Insurance