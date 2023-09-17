import React from 'react'
import SubPage from '../../../components/common/pageComponents/layout/SubPage'
import PageTitle from '../../../components/common/pageComponents/typography/PageTitle'
import ArticleBlock from '../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../components/common/pageComponents/typography/ParagraphBlock'

const Diversity = () => {
  return (
    <SubPage>
        <PageTitle>Diversity</PageTitle>
        <ArticleBlock>
          <BlockTitle>Equal Employment Opportunity Statement</BlockTitle>
          <ParagraphBlock>
                Wahsega provides equal employment opportunities (EEO) to all employees and applicants for employment
              without regard to race, color, religion, gender, sexual orientation, gender identity, national origin, age,
              disability, genetic information, marital status, amnesty or status as a covered veteran in accordance with
              applicable federal, state and local laws. Wahsega complies with applicable state and local laws governing
              nondiscrimination in employment in every location in which the company has facilities. This policy applies
              to all terms and conditions of employment, including hiring, placement, promotion, termination, layoff,
              recall, transfer, leaves of absence, compensation and training.
          </ParagraphBlock>
          <ParagraphBlock>
              Wahsega expressly prohibits any form of unlawful employee harassment based on race, color, religion,
            gender, sexual orientation, national origin, age, genetic information, disability or veteran status. Improper
            interference with the ability of Wahsega employees to perform their expected job duties is absolutely not
            tolerated.
          </ParagraphBlock>
        </ArticleBlock>
        <ArticleBlock>
          <BlockTitle>
            Americans with Disabilities Act (ADA)
            and the ADA Amendments Act (ADAAA)
          </BlockTitle>
          <ParagraphBlock>
              The Americans with Disabilities Act (ADA) and the Americans with Disabilities Amendments Act, known as the
            ADAAA, are federal laws that prohibit employers with 15 or more employees from discriminating against
            applicants and individuals with disabilities and that when needed provide reasonable accommodations to
            applicants and employees who are qualified for a job, with or without reasonable accommodations, so that
            they may perform the essential job duties of the position.
          </ParagraphBlock>
          <ParagraphBlock>
              It is the policy of Wahsega to comply with all federal and state laws concerning the employment of persons
            with disabilities and to act in accordance with regulations and guidance issued by the Equal Employment
            Opportunity Commission (EEOC). Furthermore, it is our company policy not to discriminate against qualified
            individuals with disabilities in regard to application procedures, hiring, advancement, discharge,
            compensation, training or other terms, conditions and privileges of employment.
          </ParagraphBlock>
          <ParagraphBlock>
              The company will reasonably accommodate qualified individuals with a disability so that they can perform
            the essential functions of a job unless doing so causes a direct threat to these individuals or others in the
            workplace and the threat cannot be eliminated by reasonable accommodation and/or if the accommodation
            creates an undue hardship to Wahsega Contact the Human Resource department with any questions or
            requests for accommodation.
          </ParagraphBlock>

        </ArticleBlock>
    </SubPage>
  )
}

export default Diversity