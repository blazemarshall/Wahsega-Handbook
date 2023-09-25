import React from 'react'
import ArticleBlock from '../../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../../components/common/pageComponents/typography/ParagraphBlock'
import LetteredBulletPoint from '../../../../components/common/pageComponents/typography/LetteredBulletPoint'

const HouseKeeping = () => {
  return (
        <ArticleBlock>
            <BlockTitle>Houseleeping</BlockTitle>
            <ParagraphBlock>– cleaning the work environment to ensure safety. 
                <LetteredBulletPoint letter={'a'}>Keep workstations clutter free and organized.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'b'}>Only closed lid drinks allowed at workstations.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'c'}>Daily sweeping of debris.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'d'}>Daily disposal of trash. </LetteredBulletPoint>
                <LetteredBulletPoint letter={'e'}>Limit tripping risks by keeping designated walkways clear.</LetteredBulletPoint>
            </ParagraphBlock>
        </ArticleBlock>
    )
}

export default HouseKeeping