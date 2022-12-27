import { useEffect } from 'react';
import { scrollSection } from 'utils';
import { useLocation, useNavigate } from 'react-router-dom';

const useScrollToTarget = () => {
    const { hash, pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (hash) {
            scrollSection(hash);
            navigate(pathname, { replace: true });
        }
    }, [hash, navigate, pathname]);
};
export default useScrollToTarget;
