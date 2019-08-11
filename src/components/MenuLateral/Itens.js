import React from 'react';
import { Drawer } from 'react-native-paper';

const getScreenOptions = (descriptors, routeKey) => {
  const descriptor = descriptors[routeKey];

  return descriptor.options;
};

const Itens = ({
  items,
  onItemPress,
  activeItemKey,
  getLabel,
  renderIcon,
  descriptors,
}) => {
  return items.map(route => {
    const { drawerIcon } = getScreenOptions(descriptors, route.key);
    const focused = activeItemKey === route.key;

    return (
      <Drawer.Item
        label={getLabel({ route })}
        icon={
          typeof drawerIcon === 'function'
            ? ({ size, color }) => drawerIcon(size, color)
            : renderIcon({ route })
        }
        key={route.key}
        active={focused}
        onPress={() => onItemPress({ route, focused })}
      />
    );
  });
};

export default Itens;
