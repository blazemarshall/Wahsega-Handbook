import React from 'react'
import SubPage from '../../../components/common/pageComponents/layout/SubPage'
import ArticleBlock from '../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../components/common/pageComponents/typography/ParagraphBlock'

const PhotoVideo = () => {
  return (
    <SubPage>
        <ArticleBlock>
            <BlockTitle>Photo/Video Policy</BlockTitle>
            <ParagraphBlock>
                    From time to time, we take photos and videos in the
                course of our work and at sanctioned work events. If you
                do not want your photo taken, please let our
                photographer (usually a co-worker), know before we
                click that shutter.
            </ParagraphBlock>
            <ParagraphBlock>
                    Photos taken during the course of our work by a
                company employee or sanctioned company
                photographer become the property of Wahsega in
                perpetuity. Any photos submitted to Wahsega (i.e.
                headshots) can be used by Wahsega in perpetuity for
                marketing promotions, corporate, and/or legal.
            </ParagraphBlock>
            <ParagraphBlock>
                    Employees waive any right to inspect or approve the
                photo or video footage that may be used for marketing,
                corporate, or legal purposes. Wahsega retains the right
                to use these photos/videos during and after
                employment.
            </ParagraphBlock>
        </ArticleBlock>
    </SubPage>
  )
}

export default PhotoVideo