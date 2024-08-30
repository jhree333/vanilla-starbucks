import { Component } from "../core"
import Visual from "../components/Visual"
import Notice from "../components/Notice"
import Rewards from "../components/Rewards"
import Youtube from "../components/Youtube"
import SeasonProduct from "../components/SeasonProduct"
import ReserveCoffee from "../components/ReserveCoffee"
import PickYourFavorite from "../components/PickYourFavorite"
import ReserveStore from "../components/ReserveStore"
import FindStore from "../components/FindStore"
import Awards from "../components/Awards"
import ToTopButton from "../components/ToTopButton"

export default class Home extends Component {
  render() {
    const theVisual = new Visual().el
    const theNotice = new Notice().el
    const theRewards = new Rewards().el
    const theYoutube = new Youtube().el
    const theSeasonProduct = new SeasonProduct().el
    const theReserveCoffee = new ReserveCoffee().el
    const thePickYourFavorite = new PickYourFavorite().el
    const theReserveStore = new ReserveStore().el
    const theFindStore = new FindStore().el
    const theAwards = new Awards().el
    const theToTopButton = new ToTopButton().el
    if (this.el instanceof HTMLElement) {
      this.el.classList.add("container")
    }

    this.el.append(
      theVisual,
      theNotice,
      theRewards,
      theYoutube,
      theSeasonProduct,
      theReserveCoffee,
      thePickYourFavorite,
      theReserveStore,
      theFindStore,
      theAwards,
      theToTopButton
    )
  }
}
