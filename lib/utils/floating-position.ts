export const computePosition = <
    TContainer extends HTMLElement,
    TComponent extends HTMLElement
>(
    container: TContainer,
    component: TComponent
): void => {

    resetFloatingPosition(component);

    const offset: number = 5;
    const { availableTopSpace, availableRightSpace, availableBottomSpace, availableLeftSpace } = getAvailableSpace(container);

    // Vertical positioning
    const verticalPositioning: number = container.clientHeight + offset;

    if (availableTopSpace > component.clientHeight + offset) {
        component.style.bottom = `${verticalPositioning}px`;
    }
    else if (availableBottomSpace > component.clientHeight + offset) {
        component.style.top = `${verticalPositioning}px`;
    }

    // Horizontal positioning
    const horizontalPositioning: number = component.clientWidth + offset;

    if (availableLeftSpace > horizontalPositioning) {
        component.style.right = `${0}px`;
    }
    else if (availableRightSpace > horizontalPositioning) {
        component.style.left = `${0}px`;
    }
};

export const resetFloatingPosition = <TComponent extends HTMLElement>(component: TComponent): void => {

    component.style.left = "";
    component.style.right = "";
    component.style.bottom = "";
    component.style.top = "";
};

export const getAvailableSpace = <TContainer extends HTMLElement>(container: TContainer) => {

    // Window
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;

    const { top, right, bottom, left } = container.getBoundingClientRect();

    const availableTopSpace: number = top;
    const availableRightSpace: number = windowWidth - right;
    const availableBottomSpace: number = windowHeight - bottom;
    const availableLeftSpace: number = left;

    return {
        availableTopSpace,
        availableRightSpace,
        availableBottomSpace,
        availableLeftSpace,
    };
};