
import * as React  from 'react'
import { Switcher, SegmentedControlButton } from 'nachos-ui';
import { SegmentTheme } from '../styles';

const filters = [
    { text: 'Precio', value: 'precio'},
    { text: 'Cercania', value: 'cercania'},
    { text: 'Rating', value: 'rating'},
    { text: 'Tiempo', value: 'tiempo'},
]

export default class RestaurantFilter extends React.PureComponent<any> {

    static defaultProps = {
        onSelect: () => null,
        currentFilter: ''
    }
  render() {
    return (
        <Switcher onChange={this.props.onSelect} direction='row'>
        { filters.map(({text, value}) => (
            <SegmentedControlButton 
                key={text} 
                theme={SegmentTheme} 
                selected={this.props.currentFilter === value} 
                value={value} 
                text={text} 
            />
        ))}
    </Switcher>
    )
  }
}
