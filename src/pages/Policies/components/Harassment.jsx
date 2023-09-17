import React from 'react'
import SubPage from '../../../components/common/pageComponents/layout/SubPage'
import ArticleBlock from '../../../components/common/pageComponents/layout/ArticleBlock'
import PageTitle from '../../../components/common/pageComponents/typography/PageTitle'
import ParagraphBlock from '../../../components/common/pageComponents/typography/ParagraphBlock'
import BlockTitle from '../../../components/common/pageComponents/typography/BlockTitle'
import { Article } from '@mui/icons-material'

const Harassment = () => {
  return (
    <SubPage>
            <PageTitle>Harassment</PageTitle>
        <ArticleBlock id="#">
            <BlockTitle>Anti-harassment Policy</BlockTitle>
            <ParagraphBlock>
                    Wahsega is committed to a work environment in which all individuals are treated with respect and
                dignity. Each individual has the right to work in a professional atmosphere that promotes equal
                employment opportunities and prohibits unlawful discriminatory practices, including harassment.
                Therefore, Wahsega expects that all relationships among persons in the office will be business-like
                and free of bias, prejudice and harassment
            </ParagraphBlock>
            <ParagraphBlock>
                    It is the policy of Wahsega to ensure equal employment opportunity without discrimination or
                harassment on the basis of race, color, religion, gender, sexual orientation, gender identity, national
                origin, age, disability, genetic information, marital status, amnesty or status as a covered veteran.
                Wahsega prohibits any such discrimination or harassment
            </ParagraphBlock>
            <ParagraphBlock>
                    Wahsega encourages reporting of all perceived incidents of discrimination or harassment. It is the
                policy of Wahsega to promptly and thoroughly investigate such reports. Wahsega prohibits
                retaliation against any individual who reports discrimination or harassment or who participates in an
                investigation of such reports.
            </ParagraphBlock>
        </ArticleBlock>
        <ArticleBlock>
            <BlockTitle>Definitions of Harassment</BlockTitle>
            <ParagraphBlock>
                    Sexual harassment constitutes discrimination and is illegal under federal, state and local laws. For the purposes of this policy, sexual
                harassment is defined, as in the Equal Employment Opportunity Commission Guidelines, as unwelcome sexual advances, requests for
                sexual favors and other verbal or physical conduct of a sexual nature when, for example a) submission to such conduct is made either
                explicitly or implicitly a term or condition of an individual's employment; b) submission to or rejection of such conduct by an individual is
                used as the basis for employment decisions affecting such individual; or c) such conduct has the purpose or effect of unreasonably
                interfering with an individual's work performance or creating an intimidating, hostile or offensive working environment.
            </ParagraphBlock>
            <ParagraphBlock>
                    Harassment on the basis of any other protected characteristic is also strictly prohibited. Under this policy, harassment is verbal, written
                or physical conduct that denigrates or shows hostility or aversion toward an individual because of his/her race, color, religion, gender,
                sexual orientation, national origin, age, disability, marital status, citizenship, genetic information or any other characteristic protected by
                law or that of his/her relatives, friends or associates, and that a) has the purpose or effect of creating an intimidating, hostile or offensive
                work environment; b) has the purpose or effect of unreasonably interfering with an individual's work performance; or c) otherwise
                adversely affects an individual's employment opportunities.
            </ParagraphBlock>
            <ParagraphBlock>
                    Harassing conduct includes epithets, slurs or negative stereotyping; threatening, intimidating or hostile acts; denigrating jokes; and
                written or graphic material that denigrates or shows hostility or aversion toward an individual or group and that is placed on walls or
                elsewhere on the employer's premises or circulated in the workplace, on company time or using company equipment via e-mail, phone
                (including voice messages), text messages, tweets, blogs, social networking sites or other means
            </ParagraphBlock>
        </ArticleBlock>
        <ArticleBlock>
            <BlockTitle>Harassment Complaint Process</BlockTitle>
            <ParagraphBlock>
                    Individuals who believe they have been the victims of conduct prohibited by this policy statement or who believe they have
                witnessed such conduct should discuss their concerns with their immediate supervisor, Human Resources or any member of
                management.
            </ParagraphBlock>
            <ParagraphBlock>
                    When possible, Wahsega encourages individuals who believe they are being subjected to such conduct to promptly advise the
                offender that his or her behavior is unwelcome and request that it be discontinued. Often this action alone will resolve the
                problem. Wahsega recognizes, however, that an individual may prefer to pursue the matter through complaint procedure
            </ParagraphBlock>
            <ParagraphBlock>
                    Wahsega encourages the prompt reporting of complaints or concerns so that rapid and constructive action can be taken before
                relationships become irreparably strained. Therefore, although no fixed reporting period has been established, early reporting
                and intervention have proven to be the most effective method of resolving actual or perceived incidents of harassmen
            </ParagraphBlock>
            <ParagraphBlock>
                    Any reported allegations of harassment, discrimination or retaliation will be investigated promptly. The investigation may include
                individual interviews with the parties involved and, where necessary, with individuals who may have observed the alleged
                conduct or may have other relevant knowledge
            </ParagraphBlock>
            <ParagraphBlock>
                    Confidentiality will be maintained throughout the investigatory process to the extent consistent with adequate investigation and
                appropriate corrective action. Retaliation against an individual for reporting harassment or discrimination or for participating in
                an investigation of a claim of harassment or discrimination is a serious violation of this policy and, like harassment or
                discrimination itself, will be subject to disciplinary action. Acts of retaliation should be reported immediately and will be promptly
                investigated and addressed. Misconduct constituting harassment, discrimination or retaliation will be dealt with appropriately
            </ParagraphBlock>
        </ArticleBlock>
    </SubPage>
  )
}

export default Harassment