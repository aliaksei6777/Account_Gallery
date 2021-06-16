public with sharing class AccountData {
    @AuraEnabled
    public static List<Account> getAccountList(String selectType) {
        String value = selectType;
        if (value == 'all') {
            return [
            SELECT Id, Name, Owner.Name, Type, Budget__c, Number_of_Employees__c, Description
            FROM ACCOUNT
            ];
        } else {
            return [
            SELECT Id, Name, Owner.Name, Type, Budget__c, Number_of_Employees__c, Description
            FROM ACCOUNT
            WHERE Type =:value
            ];
        }
        
    }
}