import React from 'react'
import ArticleBlock from '../../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../../components/common/pageComponents/typography/ParagraphBlock'
import LetteredBulletPoint from '../../../../components/common/pageComponents/typography/LetteredBulletPoint'
import RomanNumeralBulletPoint from '../../../../components/common/pageComponents/typography/RomanNumeralBulletPoint'

const Lifting = () => {
  return (
        <ArticleBlock>
            <BlockTitle>Lifting</BlockTitle>
            <ParagraphBlock>
                <LetteredBulletPoint letter={'a'}>Limit weight you lift to no more than 50 pounds.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'b'}>When lifting loads heavier than 50 pounds, use two or more people to lift the load</LetteredBulletPoint>
                <LetteredBulletPoint letter={'c'}>Use pallet jacks and hand trucks to transport heavy items.
                    <RomanNumeralBulletPoint numeral={'i'}>Decompress pallet jack after use.</RomanNumeralBulletPoint>
                </LetteredBulletPoint>
                <LetteredBulletPoint letter={'d'}>Spotter is required if employee is moving oversized pallet</LetteredBulletPoint>
                <LetteredBulletPoint letter={'e'}>Spotter is required if employee is moving oversized pallet.
e. Practice correct posture when lifting to align and balance the body while sitting or standing. The head is kept upright and is not
turned to either side more than about 30 degrees or tilted forward or backward more than about 15 degrees. When the employee is
standing, the torso is not bent more than 10 to 20 degrees from the vertical position and the natural curves of the spine are maintained.
The pelvis and shoulders should face straight ahead to avoid twisting the torso. The shoulders are relaxed and knees slightly bent. The
arms hang normally at the side, with elbows close to the body. The elbows are not bent more than about 90 degrees and the palms face
in toward each other and the center line of the body. The wrists are in line with the forearms and are not bent sideways, forward
(towards the palm), or backward (towards the back of the hand.) When the worker is seated, the buttocks and feet are firmly supported.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'f'}>Place materials that are to be manually lifted at "power zone" height, about mid-thigh to mid-chest. Maintain neutral and straight
spine alignment whenever possible. Usually, bending at the knees, not the waist, helps maintain proper spine alignment.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'g'}>Avoid twisting, especially when bending forward while lifting. Turn by moving the feet rather than twisting the torso.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'h'}>Keep your elbows close to your body and keep the load as close to your body as possible</LetteredBulletPoint>
                <LetteredBulletPoint letter={'i'}>Keep the vertical distance of lifts between mid-thigh and shoulder height. Do not start a lift below mid-thigh height nor end the lift
above shoulder height. Lifting from below waist height puts stress on legs, knees, and back. Lifting above shoulder height puts stress on
the upper back, shoulders, and arms.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'j'}>Break down loads into smaller units and carry one in each hand to equalize loads. Use buckets with handles, or similar devices, to
carry loose items.</LetteredBulletPoint>
                <LetteredBulletPoint letter={'k'}>Pushing is generally preferable to pulling. Pushing allows the employee to use large muscle groups and apply more force to the
load. Pulling carries a greater risk of strain and injury.</LetteredBulletPoint>

            </ParagraphBlock>
        </ArticleBlock>
    )
}

export default Lifting