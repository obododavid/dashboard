import styled from 'styled-components';

export const ContentWrapper = styled.div`
    background-color: ${(props) => props.theme.lightBlue};
    flex: 1;
    padding: 30px;

    .content {
        &__header {
            display: flex;
            justify-content: space-between;
            margin: ${(props) => props.theme.popularBoxMargin};

            button {
                padding: 15px 30px;
                color: #fff;
                font-weight: 500;
                border-radius: 10px;
                border: none;
                background-color: ${(props) => props.theme.darkBlue};
                font-size: 12px;
                letter-spacing: 1px;
                display: flex;
                align-items: center;

                span {
                    margin-right: 5px;
                    font-size: 20px;
                }
            }
        }

        &__body {
            &__top-section {
                display: flex;

                &__left {
                    flex-basis: 65%;

                    .total {
                        display: flex;
                    }

                    .graph {
                        height: 400px;
                        margin: ${(props) => props.theme.popularBoxMargin};
                        background-color: #fff;
                        border-radius: ${(props) => props.theme.myBorderRadius};
                        padding: 20px;

                        &__innerTop {
                            display: flex;
                            justify-content: space-between;

                            &__left-column {
                                .covid-stats-header {
                                    margin-bottom: 15px;
                                }

                                .tags-wrapper {
                                    display: flex;

                                    .tag {
                                        border: 1px solid
                                            ${(props) => props.theme.ashColor};
                                        display: flex;
                                        align-items: center;
                                        padding: 3px 5px;
                                        border-radius: 5px;
                                        margin-right: 10px;

                                        .bullet {
                                            width: 10px;
                                            height: 10px;
                                            display: inline-block;
                                            background-color: ${(props) =>
                                                props.theme.darkBlue};
                                            border-radius: 3px;
                                            margin-right: 5px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                &__right {
                    border: 1px solid green;
                    flex-basis: 35%;
                    margin: ${(props) => props.theme.popularBoxMargin};
                }
            }

            &__bottom-section {
                display: flex;

                &__left {
                    flex-basis: 65%;
                    display: flex;

                    .box {
                        height: 300px;
                        border: 1px solid orange;
                        margin: ${(props) => props.theme.popularBoxMargin};
                        flex: 1;
                    }
                }

                &__right {
                    height: 300px;
                    border: 1px solid orange;
                    margin: ${(props) => props.theme.popularBoxMargin};
                    flex: 1;
                    flex-basis: 35%;
                }
            }
        }
    }
`;
