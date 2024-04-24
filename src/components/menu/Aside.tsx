import * as styles from './Menu.module.scss';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
    className?: string;
    onClose?: (e?: React.MouseEvent) => void;
    [x: string]: any;
}

function Aside(props: Props) {
    const router = useRouter();
    const [expanded, setExpanded] = useState([]);

    const handleToggle = (id: string) => {
        setExpanded((ids) => {
            if (ids.indexOf(id) > -1) {
                return ids.filter((val) => val != id);
            } else {
                return [...ids, id];
            }
        });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        router.push(
            `/search?q=${encodeURIComponent(formData.get('q').toString())}`
        );
        props?.onClose?.(e as any);
    };

    return (
        <aside className={styles['expandable-menu-item']}>
            <ul className="xs__p-0 xs__m-0">
                <li>
                    <ul className="xs__p-0  xs__p+4">
                        <li className=" xs__mb+4">
                            <h3
                                className={`heading sans xxs xs__m-0 ${styles['label']}`}
                            >
                                SECTIES
                            </h3>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/economie"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/economie"
                            >
                                Economie
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/politiek"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/politiek"
                            >
                                Politiek
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/bedrijfsleven"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/bedrijfsleven"
                            >
                                Bedrijfsleven
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/financiele-markten"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/financiele-markten"
                            >
                                Financiële markten
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/samenleving"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/samenleving"
                            >
                                Samenleving
                            </a>
                        </li>
                        <li className="xs__mb+4">
                            <a
                                href="https://fd.nl/tech-en-innovatie"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/tech-en-innovatie"
                            >
                                Tech & Innovatie
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://fd.nl/opinie"
                                className="heading sans xs"
                                data-ga-name="menu_click"
                                data-ga-category="user interactions"
                                data-ga-action="menu click"
                                data-ga-label="https://fd.nl/opinie"
                            >
                                Opinie
                            </a>
                        </li>
                    </ul>
                </li>

                <li
                    className={`${styles['menu-divider']} xs__p-0 xs__pt+1 xs__pb+1`}
                >
                    <hr className="xs__m-0" />
                </li>
                <li
                    className={`${styles['menu-item']} xs__pt+3 xs__pr+4 xs__pb+2 xs__pl+4`}
                >
                    <a
                        href="https://fd.nl/persoonlijk"
                        className={`${styles['persoonlijk-link']} xs__mb+4`}
                        data-ga-name="menu_click"
                        data-ga-category="user interactions"
                        data-ga-action="menu click"
                        data-ga-label="https://fd.nl/persoonlijk"
                    >
                        <div className="heading sans xxs">FD PERSOONLIJK</div>
                        <img
                            className="xs__mt+2"
                            src="https://static.fd.nl/digikrant/persoonlijk-cover/cover.jpg"
                            title="FD Persoonlijk"
                            alt="FD Persoonlijk"
                        />
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export { Aside };
