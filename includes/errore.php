<?php
class Erorre{
    static function ShowErrore(){
        global $ERORRS;
        if (count($ERORRS) > 0) {
            ?>
            <div class="erroremessage">
                <ul>
                    <?php
                        foreach ($ERORRS as  $value) {
                            ?>
                                <li><?php echo $value; ?></li>
                            <?php
                        }
                    ?>
                </ul>
            </div>
            <?php
        }
    }
    static function Add($message){
        global $ERORRS;
        $ERORRS[]=$message;
    }
    static function IsContain(){
        global $ERORRS;
        if ($ERORRS and count($ERORRS)>0) {
            return true;
        }
        return false;
    }
}