import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'

//constants
const BUY = 'app/shop/add'
//store
const initialState = {
  packs: [
    {
      id: 1,
      title: 'Natural Business Pack',
      url: img1,
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus libero vel scelerisque porta. Nam ornare congue magna, ut ultrices lacus vehicula porta.',
      bought: false,
      cost: 45.5
    },
    {
      id: 2,
      title: 'Mobile Pack',
      url: img2,
      desc:
        'Mauris lorem arcu, accumsan in gravida vitae, rutrum in dui. Quisque vestibulum tellus sed leo interdum, ac auctor nunc commodo. Aliquam sagittis dignissim.',
      bought: false,
      cost: 50
    },
    {
      id: 3,
      title: 'Aesthetic Tech Pack',
      url: img3,
      desc:
        'Nam in nulla ac lectus sagittis rhoncus. Suspendisse at enim sit amet massa luctus consectetur ut non eros. Mauris sagittis lobortis mauris ut interdum.',
      bought: true,
      cost: 160
    },
    {
      id: 4,
      title: 'Social Media Pack',
      url: img4,
      desc:
        'Fusce vulputate metus et quam consequat, tristique mattis justo venenatis. Praesent bibendum fringilla diam. Fusce rhoncus ex venenatis, consectetur dui eu.',
      bought: true,
      cost: 20.99
    },
    {
      id: 5,
      title: 'Equipment Pack',
      url: img5,
      desc:
        'Cras laoreet ex eu orci cursus placerat. Fusce ipsum orci, tempor sed purus nec, efficitur gravida libero.  Quisque mauris lacus, feugiat et diam non.',
      bought: false,
      cost: 45
    },
    {
      id: 6,
      title: 'Vacation Pack',
      url: img6,
      desc:
        'Curabitur facilisis lacus vel risus consequat, sit amet facilisis enim condimentum. Proin varius libero eu arcu finibus, vitae vulputate lacus faucibus.',
      bought: false,
      cost: 25
    }
  ]
}
//actions
export const buyImage = id => {
  return {
    type: BUY,
    payload: id
  }
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case BUY:
      //get index of image in array
      const index = action.payload
      let packs = [...state.packs]
      let pack = Object.assign({}, packs[index])
      pack.bought = true
      packs[index] = pack
      //return state
      return Object.assign({}, state, { packs: packs })
    default:
      return state
  }
}
