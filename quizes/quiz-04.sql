use `tmptest22`;

UPDATE `episode` SET `active`=FALSE where episode.showid = (SELECT `showid` from `show` where show.showname = 'Gumball');

DELETE s, e FROM `show` s LEFT JOIN `episode` e on e.showid = s.showid WHERE s.showname = 'Steven Universe';

INSERT INTO `show` SET `showid`=2012957, `showname`='Clarence';

INSERT INTO `episode` SET
`titleid`=2124352,
`name`='Tiny Piggie Hatch',
`showid`=2012957,
`active`=true,
`unlocked`=true
;

INSERT INTO `show`(`showid`, `showname`) VALUES (42, "Unlocked");

CREATE OR REPLACE VIEW `vw_unlockeds` AS 
SELECT `titleid`, `name`, `showid`, `active` from `tmptest22`.`episode` 
WHERE `unlocked` = TRUE ORDER BY `name`
;