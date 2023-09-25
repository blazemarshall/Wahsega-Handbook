import React from 'react'
import ArticleBlock from '../../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../../components/common/pageComponents/typography/ParagraphBlock'
import LetteredBulletPoint from '../../../../components/common/pageComponents/typography/LetteredBulletPoint'

const Ladders = () => {
  return (
    <ArticleBlock>
        <BlockTitle>Ladders</BlockTitle>
        <ParagraphBlock> – portable, straight, step stools
        <LetteredBulletPoint letter={'a'}>When setting up a ladder, secure the base and “walk” the ladder into place.</LetteredBulletPoint>
        <LetteredBulletPoint letter={'b'}>The ladder should be set at the proper angle of one foot out at the base for every four feet of height.</LetteredBulletPoint>
        <LetteredBulletPoint letter={'c'}> Before using a ladder, make sure it is secured in place.</LetteredBulletPoint>
        <LetteredBulletPoint letter={'d'}>When in position, the ladder should protrude three feet above the intended landing point.</LetteredBulletPoint>
        <LetteredBulletPoint letter={'e'}>Employees shall not work from the top two rungs of a ladder.</LetteredBulletPoint>
        <LetteredBulletPoint letter={'f'}>Don't overreach while on a ladder. It is easier and safer to climb down and move the ladder over a few feet to a new position.</LetteredBulletPoint>
        <LetteredBulletPoint letter={'g'}>Always face the ladder when using it. Grip it firmly and use the three-point contact method when moving up or down.</LetteredBulletPoint>
        <LetteredBulletPoint letter={'h'}>Keep both metal and wood ladders, away from electrical sources.</LetteredBulletPoint>
        </ParagraphBlock>
    </ArticleBlock>
  )
}

export default Ladders