import FtStoryLayout from "./ftStoryLayout.jsx";
import PropTypes from 'prop-types';

import FtStoryOne from "./ftStoryOne.avif";
import FtStoryTwo from "./ftStoryTwo.jpg";
import FtStoryThree from "./ftStoryThree.jpg";
import FtStoryFour from "./ftStoryFour.jpg";

export default function FtStory({ftStory}) {
    if (ftStory === 1) {
        return (
            <FtStoryLayout
                header="10 Must-Visit Events in Banff and Lake Louise in 2025"
                text="Get out your calendar and block off some time to enjoy these great events in the mountains with friends."
                imgSrc={FtStoryOne}
                imgAlt="Winter Escape in the Canadian Rockies"
            ></FtStoryLayout>
        )
    } else if (ftStory === 2) {
        return (
            <FtStoryLayout
                header="5 Magical Things to Do in Winter in Banff and Lake Louise"
                text="Five things to do to have a magical visit to Banff National Park this Winter."
                imgSrc={FtStoryTwo}
                imgAlt="Powder Chasing in Banff National Park"
            ></FtStoryLayout>
        )
    } else if (ftStory === 3) {
        return (
            <FtStoryLayout
                header="Winter Myths Exposed: The Truth About Snowy Season in Banff and Lake Louise"
                text="Bust those winter beliefs and uncover the magic of winter in the Canadian Rockies."
                imgSrc={FtStoryThree}
                imgAlt="Hiking in the Canadian Rockies"
            ></FtStoryLayout>
        )
    } else if (ftStory === 4) {
        return (
            <FtStoryLayout
                header="7 Canadian Foods to Devour in Banff and Lake Louise"
                text="Induldge your inner foodies with these Canadian favourites in Banff National Park."
                imgSrc={FtStoryFour}
                imgAlt="Camping in Banff National Park"
            ></FtStoryLayout>
        )
    }
}


FtStory.propTypes = {
    ftStory: PropTypes.string.isRequired,
};
