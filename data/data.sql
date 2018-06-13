insert into `show` (`showid`, `showname`) VALUES
(835928, 'Gumball'),
(2011404, 'Steven Universe'),
(2000349, 'Teen Titans Go');

INSERT INTO `episode` (`titleid`, `name`, `showid`, `active`, `unlocked`) VALUES
(2127103, 'At War with Ghosts', 835928, TRUE, TRUE),
(2161404, 'Doctor Man', 835928, TRUE, FALSE),
(2126651, 'I Think I Need a Little Change', 2011404, TRUE, TRUE),
(2126687, 'Onion\'s Other Friends', 2011404, TRUE, FALSE),
(2126804, 'Titans vs. Pain Bot', 2000349, TRUE, TRUE),
(2126886, 'Robin Races Kid Flash', 2000349, TRUE, FALSE);
