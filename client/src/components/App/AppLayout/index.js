import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useRouter } from 'next/router';

import AuthContext from '../../../utils/authContext';
import getOrgId from '../../../utils/orgId';
import { colors, breakpoints } from '../../../styles/theme';
import useWindowSize from '../../../hooks/useWindowSize';
import SEO from '../../Marketing/Layout/seo';

import SidebarDesktop from '../Navigation/sidebarDesktop';
import SidebarMobile from '../Navigation/sidebarMobile';
import AppHeader from '../Navigation/appHeader';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

const Wrapper = styled.div`
  background-color: ${colors.gray100};
  overflow: hidden;
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /*width: 0;*/
  flex: 1 1 0%;
`;

const Main = styled.main`
  flex: 1 1 0%;
  z-index: 0;
  overflow-y: auto;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
  .ant-popover-inner-content {
    padding: 0px;
    background-color: ${({ theme }) => (theme === THEMES.DARK ? colors.midnight : colors.white)};
  }
`;

const Layout = ({ children }) => {
  const location = useRouter();
  const org_id = getOrgId();

  const { authState } = useContext(AuthContext);

  //handle antd sidebar rerender issue
  const windowSize = useWindowSize();
  const breakpoint = breakpoints.medium.substring(0, breakpoints.medium.length - 2);
  const isMobile = windowSize.width <= breakpoint;

  const [showMobileMenu, toggleShowMobileMenu] = useState(false);
  const [username, setUsername] = useState('');
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [isDesktopMenuCollapsed, toggleIsDesktopMenuCollapsed] = useState(false);

  useEffect(() => {
    if (authState.user.id) setUsername(authState.user.username);
  }, [authState]);

  const mobileMenuHandler = () =>
    showMobileMenu ? toggleShowMobileMenu(false) : toggleShowMobileMenu(true);

  const desktopMenuHandler = () =>
    isDesktopMenuCollapsed
      ? toggleIsDesktopMenuCollapsed(false)
      : toggleIsDesktopMenuCollapsed(true);

  const handleCollapseChange = isMobile ? mobileMenuHandler : desktopMenuHandler;

  const themeHandler = () =>
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);

  const seoData = {
    title: 'ReLoad Resource Management Platform',
    description: 'Resource Management Platform'
  };

  return (
    <React.Fragment>
      <SEO seoData={seoData} />
      <Wrapper>
        {!isMobile && (
          <SidebarDesktop
            org_id={org_id}
            theme={theme}
            toggleTheme={themeHandler}
            location={location}
            collapsed={isDesktopMenuCollapsed}
          />
        )}
        <Content>
          <AppHeader
            collapsed={isDesktopMenuCollapsed}
            username={username}
            notifications={[
              { date: moment.now(), title: 'Hey there' },
              { date: moment.now(), title: 'Welcome!' }
            ]}
            onCollapseChange={handleCollapseChange}
            theme={theme}
          />
          {showMobileMenu && (
            <SidebarMobile
              org_id={org_id}
              toggleMobileMenu={toggleShowMobileMenu}
              theme={theme}
              toggleTheme={themeHandler}
            />
          )}
          <Main tabindex="0">
            {/*App Screens Here*/}
            <ContentWrapper theme={theme} id="primaryLayout">
              {children}
            </ContentWrapper>
          </Main>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default Layout;
