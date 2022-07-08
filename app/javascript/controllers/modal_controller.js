import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
  connect() {
    document.querySelector('#modal-wrapper').addEventListener('click', this.closeModal)
  }

  closeModal(event){
    const modalPanelClicked = document.querySelector('#modal-panel').contains(event.target)

    if (!modalPanelClicked && event.target.id !== 'modal-trigger'){
      leave(document.querySelector('#modal-wrapper'))
      leave(document.querySelector('#modal-backdrop'))
      leave(document.querySelector('#modal-panel'))
    }
  }

  showModal(){
    enter(document.querySelector('#modal-wrapper'))
    enter(document.querySelector('#modal-backdrop'))
    enter(document.querySelector('#modal-panel'))
  }
}
