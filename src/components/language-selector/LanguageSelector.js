import React, { Component } from 'react'
import { translate } from 'react-i18next'
import { getCurrentLanguage } from '../../lib/i18n'

// Components
import Button from '../button/Button'
import Overlay from '../overlay/Overlay'
import LanguageModal from './language-modal/LanguageModal'

class LanguageSelector extends Component {
  state = { isLanguageModalOpen: false }

  onLanguageEditOpen = () => this.setState({ isLanguageModalOpen: true })

  onLanguageEditClose = () => this.setState({ isLanguageModalOpen: false })

  render () {
    const { t } = this.props

    return (
      <div>
        <div className='flex'>
          <div className='ph4 flex items-center bg-white lh-copy charcoal f6 fw5' style={{ height: 40 }}>
            {getCurrentLanguage()}
          </div>
          <Button minWidth={100} onClick={this.onLanguageEditOpen}>
            {t('actions.edit')}
          </Button>
        </div>

        <Overlay show={this.state.isLanguageModalOpen} onLeave={this.onLanguageEditClose} >
          <LanguageModal className='outline-0' onLeave={this.onLanguageEditClose} />
        </Overlay>
      </div>
    )
  }
}

export default translate('settings')(LanguageSelector)
