<?php
abstract class Model
{
    public $DataBody=array();
    public $ISLIMITED=false;
    public function __construct($data=null)
    {
        if ($data === null) {
            return;
        }elseif (is_numeric($data) or is_int($data)) {
            //if set id by find model
            if (isset($this->DBNAME)) {
                $cdb = new db(__dbhost__,__dbusername__,__dbpassword__,__dbname__);
                $query = "SELECT * FROM `{$this->DBNAME}` WHERE id=$data";
                try{
                    $result = $cdb->query($query)->fetchArray();
                } catch (\Throwable $th) {
                    throw new Exception("Your DBNAME property is incorrect", 1);
                }
                if ($result and count($result)>0) {
                    foreach ($result as $key => $value) {
                        $this->setDataBodyValue($key,$value);
                    } 
                }
                $cdb->close();
            }else{
                throw new Exception("You should set DBNAME property for you model", 1);   
            }
        } elseif (is_array($data)) {
            //if set array by set model
            foreach ($data as $key => $value) {
                $this->setDataBodyValue($key,$value);
            } 
            return;
        }
        
    }
    public function __get($name)
    {
        if (isset($this->DataBody[$name])) {
            return $this->DataBody[$name];
        } else {
            return 0;
        }
    }
    public function __set($name, $value)
    {
        $this->setDataBodyValue($name,$value);
    }
    private function setDataBodyValue($name, $value){
        if (
            $this->ISLIMITED and
            array_key_exists($name,$this->DataBody)
            ) {
            return;
        }
        $this->DataBody[$name] = $value;
    }
    public function Add()
    {
        $cdb = new db(__dbhost__,__dbusername__,__dbpassword__,__dbname__);
        $query = QueryBuilder::insert($this->DBNAME,$this->DataBody);
        $return = null;
        try{
            if ($cdb->query($query)) {
                $return = $cdb->lastInsertID();
            }
        }catch(\Exception $e){
            throw new \Exception('Error: ' . $e->getMessage());
        }
        
        $cdb->close();
        return $return;
    }
    public function Update()
    {
        $cdb = new db(__dbhost__,__dbusername__,__dbpassword__,__dbname__);
        $query = QueryBuilder::update($this->DBNAME,$this->DataBody,array('id'=>$this->id));
        $return = null;
        try{
            if ($cdb->query($query)) {
                $return = $cdb->lastInsertID();
            }
        }catch(\Exception $e){
            throw new \Exception('Error: ' . $e->getMessage());
        }
        
        $cdb->close();
        return $return;
    }
    public function Delete()
    {
        $cdb = new db(__dbhost__,__dbusername__,__dbpassword__,__dbname__);
        $query = QueryBuilder::delete($this->DBNAME,array('id'=>$this->id));
        $return = null;
        try{
            if ($cdb->query($query)) {
                $return = $cdb->lastInsertID();
            }
        }catch(\Exception $e){
            throw new \Exception('Error: ' . $e->getMessage());
        }
        
        $cdb->close();
        return $return;
    }
}

