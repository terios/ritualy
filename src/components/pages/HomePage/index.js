import React, { Component } from 'react'
import styled from 'styled-components'
import IconButton from 'material-ui/IconButton'
import {
  GenericTemplate,
  Modal,
  SideFilters,
  FiltersMobile,
  FloatingButton,
} from 'components'
import { Filters as FiltersContainer, LookupList, Header, Drawer } from 'containers'
import layout from 'utils/LayoutGenerator'

const Wrapper = styled.div`
  text-align: -webkit-center;
  display: flex;
  flex-direction: row;
`
const OnDesktop = layout.is('desktop')

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterModalOpen: false,
    }
    this.openFilterModal = this.openFilterModal.bind(this)
  }
  openFilterModal() {
    this.setState({ filterModalOpen: !this.state.filterModalOpen })
  }
  getHeaderComponent() {
    return (<Header
      title="OKLA"
      righElm={<IconButton><i className="material-icons">filter_list</i></IconButton>}
      rightElmAction={this.openFilterModal}
    />)
  }
  render() {
    const { filterModalOpen } = this.state
    return (
      <GenericTemplate
        header={this.getHeaderComponent()}
        drawer={<Drawer />}
      >
        <Wrapper>
          <OnDesktop>
            <FiltersContainer>
              <SideFilters />
            </FiltersContainer>
          </OnDesktop>
          <LookupList />
          <Modal modalState={filterModalOpen}>
            <FiltersContainer>
              <FiltersMobile />
            </FiltersContainer>
          </Modal>
        </Wrapper>

      </GenericTemplate>
    )
  }
}
export default HomePage
